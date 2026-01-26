const CLOUD_NAME = "dqvxeeedd";

export const cloudinaryImage = (publicId) => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_400/${publicId}`;
};
