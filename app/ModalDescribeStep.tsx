import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea} from "@nextui-org/react";

interface Props {
    isOpenModalDescribeStep: boolean;
    onOpenModalDescribeStep: () => void;
    onRecordDescribeStep: () => void;
    numberReviewStep: string;
    setText: () => void;
    stepText: string;
}

const ModalDescribeStep = ({
    isOpenModalDescribeStep,
    onOpenModalDescribeStep,
    onRecordDescribeStep,
    numberReviewStep,
    setText,
    stepText
}: Props) => {

  return (
    <Modal
      isOpen={isOpenModalDescribeStep}
      onOpenChange={onOpenModalDescribeStep}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Text of your deal
            </ModalHeader>
            <ModalBody>
              <p></p>
              <Textarea
                label="Sprint"
                variant="bordered"
                placeholder="We will develop..."
                disableAnimation
                disableAutosize
                classNames={{
                  base: "max-w-xs",
                  input: "resize-y min-h-[40px]",
                }}
                onChange={setText}
                value={stepText}
              />

              <p></p>
              {/* <p>Your voting power is:{" "}{myOrdered.toFixed(2)}{" "}${projectSymbol}{" "}tokens</p> */}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onOpenModalDescribeStep}>
                I'm good
              </Button>
              <Button color="danger" onPress={onRecordDescribeStep}>
                Yes, I want to vote
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
export default ModalDescribeStep;