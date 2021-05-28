package Prototype2;

public abstract class Watch implements Cloneable {
    private int price;
    private String model;


    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    @Override
    public String toString() {
        return "Watch{" +
                "price=" + price +
                ", model='" + model + '\'' +
                '}';
    }
}
