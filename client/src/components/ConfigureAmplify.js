import React from "react";
import Amplify from "@aws-amplify/core"

const ConfigureAmplify = () => {
  console.log("Configuring Amplify");
  Amplify.configure({
    Auth: {
      identityPoolId: "us-east-2:fe41044b-5178-49f0-8b8a-12de953fc10c",
      region: "us-east-2"
    },
    Storage: {
      AWSS3: {
        bucket: "brain-yield-bucket",
        region: "us-east-2"
      }
    }
  });

  return "";
}

export default ConfigureAmplify;
