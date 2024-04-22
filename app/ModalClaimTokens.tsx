import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Link} from "@nextui-org/react";

interface Props {
    isOpenModalClaim: boolean;
    onOpenModalClaim: () => void;
    onMakeClaim: () => void;
    projectSymbol: string;
    userTokensClaimable: number;

}

const ModalClaimTokens = ({
  onOpenModalClaim,
  onMakeClaim,
  isOpenModalClaim,
  projectSymbol,
  userTokensClaimable
}: Props) => {

  return (
    <Modal isOpen={isOpenModalClaim} onOpenChange={onOpenModalClaim}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Claiming preview
            </ModalHeader>
            <ModalBody>
              <p></p>
              <p>Now, you can claim </p>
              <p></p>
              <p>${projectSymbol}:{" "}{userTokensClaimable.toFixed(2)}{" "}tokens</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onPress={onOpenModalClaim}>
                Later
              </Button>
              <Button color="primary" onPress={onMakeClaim}>
                Yes, I need my tokens
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
export default ModalClaimTokens;