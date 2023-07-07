import { version } from "../../../package.json";
import { addInterruptIpc } from "../../ipc";
import { getCurrentNTVersion } from "../../ntVersion";
import { addInterruptWindowArgs, addInterruptWindowCreation } from "../patch";
import { QQNTim } from "@flysoftbeta/qqntim-typings";
import * as fs from "fs-extra";

export function getAPI() {
    const api: QQNTim.API.Main.API = {
        version: version,
        ntVersion: getCurrentNTVersion(),
        interrupt: {
            ipc: addInterruptIpc,
            windowCreation: addInterruptWindowCreation,
            windowArgs: addInterruptWindowArgs,
        },
        modules: {
            fs: fs,
        },
    };

    return api;
}
