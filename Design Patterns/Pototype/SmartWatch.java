package Prototype2;

public class SmartWatch extends Watch{
    private String storage;
    private String watchOS;

    public String getStorage() {
        return storage;
    }

    public void setStorage(String storage) {
        this.storage = storage;
    }

    public String getWatchOS() {
        return watchOS;
    }

    public void setWatchOS(String watchOS) {
        this.watchOS = watchOS;
    }
    @Override
    public String toString() {
        return "SmartWatch{" +
                "storage='" + storage + '\'' +
                ", watchOS='" + watchOS + '\'' +
                '}';
    }
}
