import React, { useState } from 'react'
import ShinyText from '@/components/ShinyText'
import PopoverButton from '@/components/PopoverButton'
import DialogButton from '@/components/DialogButton'
import InputForms from '@/components/InputForms'
import Image from 'next/image'


type Props = {}

const UploadsSection = (props: Props) => {
    const [uploadedFile, setUploadedFile] = useState<any>(null);
    const [previewUrl, setPreviewUrl] = useState<any>(null);

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        setUploadedFile(file);

        // Create a preview URL for the uploaded file
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    };

    return (
        <div>
            <div className='p-5 lg:p-0 lg:flex lg:items-center lg:justify-between lg:ml-2 '>
                <div className='text-center lg:text-left'>
                    <ShinyText text='File Sharing' />
                </div>
                <div className='hidden lg:block notificationBell relative'>
                    <div id='notificationDot' className='absolute h-[12px] w-[12px] bg-red9 rounded-full right-0 top-0' />
                    <PopoverButton icon={
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.2' stroke='currentColor' className='w-5 h-5'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' />
                        </svg>
                    }
                    />
                </div>
            </div>
            {/** First Card */}
            <form action=''>
                <div className='rounded-md border-b-[0.8px] border-slate4 text-xs lg:text-base p-5'>
                    <div className='flex justify-between mb-10'>
                        <h1 className='text-blue9 font-semibold'>Upload Files</h1>
                    </div>
                    <div className='flex justify-around'>
                        <div className=" flex items-center justify-center">
                            <div className="max-w-md w-full">
                                <label id='custom-text' htmlFor="fileUpload" className="block mb-4 text-gray-800 font-semibold">
                                    Select a file to upload:
                                </label>
                                <div className="flex flex-col items-center justify-center">
                                    <input
                                        type="file"
                                        id="fileUpload"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                    <label htmlFor="fileUpload" className="px-4 py-2 bg-blue9 transition duration-150 ease-in-out hover:opacity-80 text-white rounded cursor-pointer">
                                        Choose File
                                    </label>
                                    <p className="mt-2 text-gray-600 text-sm">
                                        Accepted file formats: .jpg, .png, .pdf, .docx, .txt, etc.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-5 '>
                    {uploadedFile && (
                        <div className="mt-10 bg-slate4 p-3 rounded-lg max-w-md w-full">
                            <div className="flex items-center">
                                {previewUrl && (
                                    <Image
                                        src={previewUrl}
                                        alt="Uploaded Preview"
                                        className="w-16 h-16 object-contain mr-4"
                                        width={64}
                                        height={64}
                                    />
                                )}
                                <div>
                                    <p className="text-gray-600 text-sm font-semibold">
                                        Uploaded file: <span className='font-light'>{uploadedFile.name}</span>
                                    </p>
                                    <p className="text-gray-600 text-sm font-semibold">
                                        File type: <span className='font-light'>{uploadedFile.type}</span>
                                    </p>
                                    <p className="text-gray-600 text-sm font-semibold">
                                        File size: <span className='font-light'>{Math.round(uploadedFile.size / 1024)} KB</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    <button disabled={uploadedFile ? false : true} className='mt-10 px-[200px] py-2 bg-blue9 transition duration-150 ease-in-out hover:opacity-80 text-white rounded cursor-pointer'>
                        Upload
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UploadsSection