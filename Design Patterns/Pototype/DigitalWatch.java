package Prototype2;

public class DigitalWatch extends Watch {
    private boolean alarm;
    private boolean stopwatch;

    public boolean isAlarm() {
        return alarm;
    }

    public void setAlarm(boolean alarm) {
        this.alarm = alarm;
    }

    public boolean isStopwatch() {
        return stopwatch;
    }

    public void setStopwatch(boolean stopwatch) {
        this.stopwatch = stopwatch;
    }
    @Override
    public String toString() {
        return "DigitalWatch{" +
                "alarm=" + alarm +
                ", stopwatch=" + stopwatch +
                '}';
    }
}
