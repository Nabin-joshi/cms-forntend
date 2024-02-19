import { toast } from "react-toastify";

export const toastSuccess = () => {
  toast.success("Content Saved Successfully!", {
    position: "top-center",
    autoClose: 700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "colored",
  });
};

export const toastError = () => {
  toast.error("Too Much Content!", {
    position: "top-center",
    autoClose: 700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "colored",
  });
};
