public class BankAccount {

    private int RequestedAmount;
    private int TotalAmount;
    private int AccountNumber;
    private int RemainAmountTOIssueNotes;


    public BankAccount(int accountNumber,int requestedAmount) {
        RequestedAmount = requestedAmount;
        AccountNumber = accountNumber;
    }

    public int getAccountNumber() {
        return AccountNumber;
    }

    public int getRequestedAmount() {
        return RequestedAmount;
    }

    public int getTotalAmount() {
        return TotalAmount;
    }

    public int getRemainAmountTOIssueNotes() {
        return RemainAmountTOIssueNotes;
    }

    public void setRemainAmountTOIssueNotes(int remainAmountTOIssueNotes) {
        RemainAmountTOIssueNotes = remainAmountTOIssueNotes;
    }
}
