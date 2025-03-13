export const checkToken = async () => {
   try {
      const response = await fetch('/api/check-token', {
         method: 'GET',
         credentials: 'include',
      });

      const data = await response.json();
      return data.hasToken;
   } catch (err) {
      console.error('Error checking token:', err);
      return false;
   }
};
