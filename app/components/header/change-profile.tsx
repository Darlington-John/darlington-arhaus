import Image from 'next/image';
import { useRef, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useUser } from '~/app/context/auth-context';
import loading from '~/public/icons/loading-white.svg';
import check from '~/public/icons/check.svg';
import defaultUser from '~/public/icons/user-circle.svg';
import folder from '~/public/icons/folder.svg';
import { apiRequest } from '~/lib/utils/api-request';
const ChangeProfile = (props: any) => {
   const {
      isChangeProfileVisible,
      changeProfile,
      changeProfileRef,
      toggleChangeProfilePopup,
   } = props;
   const { user } = useUser();

   const [error, setError] = useState('');
   const [uploading, setUploading] = useState(false);
   const [profileSaved, setProfileSaved] = useState(false);
   const [file, setFile] = useState<File | null>(null);
   const [imageUrl, setImageUrl] = useState<string | null>(null);
   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) {
         setFile(selectedFile);

         const reader = new FileReader();
         reader.onloadend = () => {
            setImageUrl(reader.result as string);
         };
         reader.readAsDataURL(selectedFile);
      }
   };
   const userId = user?._id;
   const handleUpload = async () => {
      if (uploading) {
         return;
      }
      if (!file || !userId) {
         return;
      }

      setUploading(true);

      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', userId);

      apiRequest({
         url: '/api/auth/upload-profile',
         method: 'POST',
         body: formData,
         headers: {
            'Content-Type': 'multipart/form-data',
         },
         onSuccess: () => {
            window.dispatchEvent(new CustomEvent('userUpdated'));
            window.dispatchEvent(new CustomEvent('usersUpdated'));
            setProfileSaved(true);
            toast.success(`Profile photo updated`, {
               icon: <FaCheck color="white" />,
            });
            setTimeout(() => {
               toggleChangeProfilePopup();
               setImageUrl('');
               setProfileSaved(false);
            }, 1000);
         },
         onError: (error) => {
            setError(error);
         },
         onFinally: () => {
            setUploading(false);
         },
      });
   };
   const fileInputRef = useRef<HTMLInputElement | null>(null);
   const handleClick = () => {
      if (fileInputRef.current) {
         fileInputRef.current.click();
      }
   };
   return (
      changeProfile && (
         <div
            className={`fixed bottom-[0px]  h-full w-full  z-50 left-0 flex  justify-center  items-center        backdrop-brightness-50  px-8     xs:px-0 `}
         >
            <div
               className={`w-[300px]     mid-popup   duration-300 ease-in-out flex flex-col py-6 px-6  gap-4   rounded-lg bg-white   items-center      ${
                  isChangeProfileVisible ? '' : 'mid-popup-hidden'
               }`}
               ref={changeProfileRef}
            >
               <div className="flex flex-col items-center gap-1">
                  <h1 className="text-[22px] louize text-center leading-[28px]">
                     {user.profile
                        ? 'Change profile photo'
                        : 'Upload profile photo'}
                  </h1>
                  <h1 className="text-sm text-grey text-center neue-light ">
                     {imageUrl
                        ? 'Set this image as your profile image?'
                        : 'Select an image for your profile image'}
                  </h1>
               </div>
               <div className="w-24  h-24  rounded-full overflow-hidden">
                  {imageUrl ? (
                     <div className="w-full h-full relative overflow-hidden rounded-full readingBook">
                        <img
                           src={imageUrl}
                           alt="Selected Profile Preview"
                           className="w-full h-full object-cover"
                        />
                     </div>
                  ) : (
                     <Image
                        src={defaultUser}
                        alt="Current Profile"
                        className="w-full h-full object-cover"
                     />
                  )}
               </div>
               {error && (
                  <h1 className="text-sm text-red   text-center">{error}</h1>
               )}
               <div className="flex items-center gap-2 w-full">
                  <button
                     onClick={imageUrl ? handleUpload : handleClick}
                     disabled={uploading}
                     className="bg-softGreen  text-white px-4 h-[40px]   hover:ring-[2px]  hover:ring-offset-1  ring-softGreen  duration-300 flex items-center gap-1 norm-mid text-sm  justify-center   w-full"
                  >
                     <Image
                        className={uploading ? 'w-5' : 'w-5'}
                        src={uploading ? loading : imageUrl ? check : folder}
                        alt=""
                     />
                     <span>
                        {profileSaved
                           ? 'Saved'
                           : uploading
                           ? null
                           : imageUrl
                           ? 'Set as Profile'
                           : 'Select Image'}
                     </span>
                  </button>
                  <input
                     type="file"
                     accept="image/*"
                     onChange={handleFileChange}
                     ref={fileInputRef}
                     className="hidden"
                  />
                  <button
                     onClick={() => {
                        setImageUrl('');
                        toggleChangeProfilePopup();
                     }}
                     className="bg-grey  text-white px-5 h-[40px]  hover:ring-[2px] hover:ring-offset-1  ring-grey  duration-300 norm-mid text-sm    "
                  >
                     Cancel
                  </button>
               </div>
            </div>
         </div>
      )
   );
};

export default ChangeProfile;
