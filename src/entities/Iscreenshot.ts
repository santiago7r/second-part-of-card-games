import { IscreenShotResult } from "./IscreenshotResult"

export interface IscreenShot {
    count: number
    next: string
    previous: string
    results: IscreenShotResult[]
}