import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Link} from "@nextui-org/react";

interface Props {
    isOpenModalViewDescStep: boolean;
    onOpenModalViewDescStep: () => void;
    stepText: string;
    currectSprintTask: string;

}

const ModalViewDescStep = ({
    isOpenModalViewDescStep,
    onOpenModalViewDescStep,
    stepText,
    currectSprintTask
}: Props) => {

  return (
    <Modal isOpen={isOpenModalViewDescStep} onOpenChange={onOpenModalViewDescStep}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {currectSprintTask} description
            </ModalHeader>
            <ModalBody>
              <p></p>
              <p>You can see what the project gonna do </p>
              <p> </p>
              <p>{stepText}</p>
              <p></p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onOpenModalViewDescStep}>
                Great
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
export default ModalViewDescStep;