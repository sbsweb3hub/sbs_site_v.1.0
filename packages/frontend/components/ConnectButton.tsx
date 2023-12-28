import React from "react";
import { Button } from "@nextui-org/react";
import { useWalletStore } from "@/service/store";

const ConnectButton = () => {
  const {
    handleIsConnected,
    isConnect,
    account,
    handleConnectNotice,
  } = useWalletStore();
  const miniText = account.substring(0, 4) + "..." + account.slice(38);

  return (
    <>
      {!isConnect ? (
        <Button color="danger" size="lg" onClick={() => handleIsConnected()}>
          Connect
        </Button>
      ) : (
        <Button color="danger" size="lg">
          {miniText}
        </Button>
      )}
    </>
  );
};

export default ConnectButton;