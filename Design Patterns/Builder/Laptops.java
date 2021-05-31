package builder;

public class Laptops{

    private String Model;
    private int Price;
    private String RAMSize;
    private String HardDiskCapacity;
    private  String SSD;
    private String Warranty;
    private String VGACard;

    public Laptops(Builder builder) {
        this.Model=builder.Model;
        this.Price=builder.Price;
        this.RAMSize=builder.RAMSize;
        this.HardDiskCapacity=builder.HardDiskCapacity;
        this.SSD=builder.SSD;
        this.Warranty=builder.Warranty;
        this.VGACard=builder.VGACard;
    }


    static class Builder{

        private String Model;
        private int Price;
        private String RAMSize;
        private String HardDiskCapacity;
        private  String SSD;
        private String Warranty;
        private String VGACard;


        public Laptops build(){
            return new Laptops(this);
        }

        public Builder(String model, int price, String Ram, String hard ){

            this.Model=model;
            this.Price=price;
            this.RAMSize=Ram;
            this.HardDiskCapacity=hard;

        }

        public Builder SSD(String ssd){
            this.SSD=ssd;
            return this;
        }

        public Builder Warranty(String warranty){
            this.Warranty=warranty;
            return this;
        }

        public Builder VGA(String vga){
            this.VGACard=vga;
            return this;
        }




    }


    @Override
    public String toString() {
        return "Laptops{" +
                "Model='" + Model + '\'' +
                ", Price=" + Price +
                ", RAMSize='" + RAMSize + '\'' +
                ", HardDiskCapacity='" + HardDiskCapacity + '\'' +
                ", SSD=" + SSD +
                ", Warranty=" + Warranty +
                ", VGACard=" + VGACard +
                '}';
    }
}
