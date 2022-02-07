import PowerShell from "powershell";
import log from "electron-log";

const WINGET_URI =
  "https://github.com/microsoft/winget-cli/releases/download/v1.1.12653/Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle";

export default class Winget {
  constructor() {
    const ps = new PowerShell("test");
    let isNotInstall = false;
    ps.on("error", (err: unknown) => {
      if (err === "") return;
      log.error(`err - [${err}]`);
    });

    ps.on("output", (data: string) => {
      if (data === "") return;
      log.log(`output - [${data}]`);
    });

    ps.on("error-output", (data: string) => {
      if (data === "") return;
      if (/CommandNotFoundException/gi.test(data)) {
        log.error("Winget is not installed");
        isNotInstall = true;
      }
      log.error(`output error - [${data}]`);
    });

    ps.on("end", (code: unknown) => {
      if (code === "") return;
      log.error(`end - [${code}]`);
      if (isNotInstall) this.InstallWinget();
    });
  }

  InstallWinget(): void {
    const ps = new PowerShell(` add-appxpackage -Path ${WINGET_URI}`);
    const isNotInstall = false;
    ps.on("error", (err: unknown) => {
      if (err === "") return;
      log.error(`err - [${err}]`);
    });

    ps.on("output", (data: string) => {
      if (data === "") return;
      log.log(`output - [${data}]`);
    });

    ps.on("error-output", (data: string) => {
      if (data === "") return;
      log.error(`output error - [${data}]`);
    });

    ps.on("end", (code: unknown) => {
      if (code === "") return;
      log.error(`end - [${code}]`);
      if (isNotInstall) this.InstallWinget();
    });
  }
}
