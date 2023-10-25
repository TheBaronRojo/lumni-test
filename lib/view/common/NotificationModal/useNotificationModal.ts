import { useState } from "react";
import useDisableBodyScroll from "../HelpersHooks/useDisableBodyScroll";

export interface INotificationModalAttributes {
  variant?: "success" | "error" | "warning";
  title?: string;
  description?: string;
  actionLabel?: string;
  disableCloseButton?: boolean;
  onAction?: () => void;
  onClose?: () => void;
}

export const useNotificationModal = () => {
  const [open, setOpen] = useState(false);
  const [attributes, setAttributes] = useState({} as INotificationModalAttributes);

  useDisableBodyScroll(open);

  return {
    openNotificationModal: (props: INotificationModalAttributes) => {
      setAttributes(props);
      setOpen(true);
    },

    closeNotificationModal: () => setOpen(false),

    notificationModalProps: {
      ...attributes,
      open: open,
      onClose: attributes.disableCloseButton
        ? undefined
        : () => { 
          setOpen(false); 
          if(attributes.onClose) attributes.onClose(); 
        },
      onAction: attributes.actionLabel 
        ? attributes.onAction ?? (() => { setOpen(false); })
        : undefined
    }
  };
}
