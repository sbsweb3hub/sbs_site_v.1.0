import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Link} from "@nextui-org/react";

interface Props {
    isOpenModalVote: boolean;
    onOpenModalVote: () => void;
    onMakeVote: () => void;
    projectSymbol: string;
    myOrdered: number;

}

const ModalVoting = ({
    isOpenModalVote,
    onOpenModalVote,
    onMakeVote,
  
  projectSymbol,
  myOrdered
}: Props) => {

  return (
    <Modal isOpen={isOpenModalVote} onOpenChange={onOpenModalVote}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Voting preview
            </ModalHeader>
            <ModalBody>
              <p></p>
              <p>You don't need to vote if you continue </p>
              <p>to believe in the project, </p>
              <p>otherwise you can do it.</p>
              
              <p></p>
              <p>Your voting power is:{" "}{myOrdered.toFixed(2)}{" "}${projectSymbol}{" "}tokens</p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onOpenModalVote}>
                I'm good
              </Button>
              <Button color="danger" onPress={onMakeVote}>
                Yes, I want to vote
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
export default ModalVoting;