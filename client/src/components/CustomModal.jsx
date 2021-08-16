import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

function CustomModal(props) {
  const {
    isOpen,
    onClose,
    size,
    onClick,
    button,
    title,
    children,
    closeButton,
  } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      isCentered
      motionPreset="scale"
      closeOnEsc="true"
      closeOnOverlayClick="true"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          {onClick && (
            <Button colorScheme="blue" mr={3} onClick={onClick}>
              {button}
            </Button>
          )}
          {closeButton && <Button onClick={onClose}>Close</Button>}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;
