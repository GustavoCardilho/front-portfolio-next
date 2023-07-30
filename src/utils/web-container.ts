
import { WebContainer } from '@webcontainer/api';

let webContainerInstace: WebContainer

export async function getWebContainerInstance() {
    if(!webContainerInstace) {
        webContainerInstace = await WebContainer.boot()
    }

    return webContainerInstace
}