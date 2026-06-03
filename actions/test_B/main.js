import { setFailed } from '@actions/core';

const main = async () => {
    console.log('Action B');
};

main().catch((err) => {
  if (err instanceof Error) {
    setFailed(err);
    return;
  }

  setFailed(`Unexpected error: ${String(err)}`);
});
