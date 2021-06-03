public abstract class Handler {

    protected Handler sucessor;

    public void setSucessor(Handler sucessor) {
        this.sucessor = sucessor;
    }

    public abstract BankAccount Withdraw(BankAccount account);

}
