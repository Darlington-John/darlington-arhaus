type ApiRequestOptions = {
   url: string;
   method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
   body?: Record<string, any>;
   onSuccess?: (response: any) => void;
   onError?: (error: string) => void;
   onFinally?: () => void;
   headers?: Record<string, string>;
};
export const apiRequest = async ({
   url,
   method = 'POST',
   body,
   headers = { 'Content-Type': 'application/json' },
   onSuccess,
   onError,
   onFinally,
}: ApiRequestOptions): Promise<void> => {
   try {
      const isFormData = body instanceof FormData;

      const res = await fetch(url, {
         method,
         headers: isFormData ? undefined : headers, // Let the browser set headers for FormData
         body: isFormData ? body : body ? JSON.stringify(body) : undefined,
      });

      if (res.ok) {
         const data = await res.json();
         if (onSuccess) onSuccess(data);
      } else {
         const errorData = await res.json();
         if (onError) onError(errorData.error || 'An error occurred.');
      }
   } catch (err) {
      if (onError) onError('An unexpected error occurred.');
   } finally {
      if (onFinally) onFinally();
   }
};
