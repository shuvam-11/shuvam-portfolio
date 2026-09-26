import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProfilePhotoContextType {
  photoSrc: string;
  updatePhoto: (dataUrl: string) => void;
  resetToDefault: () => void;
  hasCustomPhoto: boolean;
  altText: string;
}

const STORAGE_KEY = 'shuvam_profile_photo';
const DEFAULT_PATH = '/shuvam-profile.png';
const ALT_TEXT = 'SHUVAM JENA - Data Analytics and AI & Full-Stack Developer';

const ProfilePhotoContext = createContext<ProfilePhotoContextType>({
  photoSrc: DEFAULT_PATH,
  updatePhoto: () => {},
  resetToDefault: () => {},
  hasCustomPhoto: false,
  altText: ALT_TEXT,
});

export const ProfilePhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_PATH;
    } catch {
      return DEFAULT_PATH;
    }
  });

  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(() => {
    try {
      return Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      return false;
    }
  });

  const updatePhoto = (dataUrl: string) => {
    setPhotoSrc(dataUrl);
    setHasCustomPhoto(true);
    try {
      localStorage.setItem(STORAGE_KEY, dataUrl);
    } catch (e) {
      console.warn('Could not store photo in localStorage', e);
    }
  };

  const resetToDefault = () => {
    setPhotoSrc(DEFAULT_PATH);
    setHasCustomPhoto(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Could not remove photo from localStorage', e);
    }
  };

  return (
    <ProfilePhotoContext.Provider
      value={{
        photoSrc,
        updatePhoto,
        resetToDefault,
        hasCustomPhoto,
        altText: ALT_TEXT,
      }}
    >
      {children}
    </ProfilePhotoContext.Provider>
  );
};

export const useProfilePhoto = () => useContext(ProfilePhotoContext);
