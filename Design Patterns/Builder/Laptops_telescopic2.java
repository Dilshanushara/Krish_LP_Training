package builder;

public class Laptops_telescopic2 {
    private String Model;
    private int Price;
    private String RAMSize;
    private String HardDiskCapacity;
    private  String SSD;
    private String Warranty;
    private String VGACard;

    public Laptops_telescopic2(String model, int price, String RAMSize, String hardDiskCapacity, String SSD, String warranty, String VGACard) {
        Model = model;
        Price = price;
        this.RAMSize = RAMSize;
        HardDiskCapacity = hardDiskCapacity;
        this.SSD = SSD;
        Warranty = warranty;
        this.VGACard = VGACard;
    }

    public Laptops_telescopic2(String model, int price, String RAMSize, String hardDiskCapacity, String SSD, String warranty) {
        this(model,price,RAMSize,hardDiskCapacity,SSD,warranty,null);
    }

    public Laptops_telescopic2(String model, int price, String RAMSize, String hardDiskCapacity, String SSD) {
        this(model,price,RAMSize,hardDiskCapacity,SSD,null,null);
    }

    public Laptops_telescopic2(String model, int price, String RAMSize, String hardDiskCapacity) {
        this(model,price,RAMSize,hardDiskCapacity,null,null,null);
    }

    @Override
    public String toString() {
        return "Laptops_telescopic2{" +
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
