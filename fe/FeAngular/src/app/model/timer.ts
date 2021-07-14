export enum TimerVisualOption {
    Full = "full",
    Small = "small"
}

export enum TimerOption{
    ShowFixedTime = "fixed",
    Countdown = "countdown",
    Clear = "clear"
}

export class TimerInfo {
    public type = TimerOption.Countdown;
    public totalTime?: string;
    public endTime?: Date;

    public visualOptions = TimerVisualOption.Full;

    public id: ReturnType<typeof setTimeout> | any;
}

// export const TIMER: TimerInfo = {
    
// }