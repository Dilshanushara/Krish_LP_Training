package builder;

public class Laptops_telescopic {
    private String Model;
    private int Price;
    private String RAMSize;
    private String HardDiskCapacity;
    private  String SSD;
    private String Warranty;
    private String VGACard;

    public Laptops_telescopic(String model, int price, String RAMSize, String hardDiskCapacity) {
        Model = model;
        Price = price;
        this.RAMSize = RAMSize;
        HardDiskCapacity = hardDiskCapacity;
    }

    public Laptops_telescopic(String model, int price, String RAMSize, String hardDiskCapacity, String SSD) {
        this(model,price,RAMSize,hardDiskCapacity);
        this.SSD = SSD;
    }

    public Laptops_telescopic(String model, int price, String RAMSize, String hardDiskCapacity, String SSD, String warranty) {
        this(model,price,RAMSize,hardDiskCapacity,SSD);
        Warranty = warranty;
    }

    public Laptops_telescopic(String model, int price, String RAMSize, String hardDiskCapacity, String SSD, String warranty, String VGACard) {
        this(model,price,RAMSize,hardDiskCapacity,SSD,warranty);
        this.VGACard = VGACard;
    }

    @Override
    public String toString() {
        return "Laptops_telescopic{" +
                "Model='" + Model + '\'' +
                ", Price=" + Price +
                ", RAMSize='" + RAMSize + '\'' +
                ", HardDiskCapacity='" + HardDiskCapacity + '\'' +
                ", SSD='" + SSD + '\'' +
                ", Warranty='" + Warranty + '\'' +
                ", VGACard='" + VGACard + '\'' +
                '}';
    }
}
