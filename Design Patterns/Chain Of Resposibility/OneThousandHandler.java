public class OneThousandHandler extends Handler{

    @Override
    public BankAccount Withdraw(BankAccount account) {
        int requestedAmount=account.getRemainAmountTOIssueNotes();

        int numberofNotesToIssued = requestedAmount / 1000;
        if (numberofNotesToIssued > 0)
        {
            if (numberofNotesToIssued > 1)
            {
                System.out.println(numberofNotesToIssued+" OneThousand notes are Issued by OneThousandHandler");
            }
            else
            {
                System.out.println(numberofNotesToIssued+" OneThousand note is Issued by OneThousandHandler");
            }
        }
        int pendingAmountToBeProcessed = requestedAmount % 1000;

        if (pendingAmountToBeProcessed > 0){
            account.setRemainAmountTOIssueNotes(pendingAmountToBeProcessed);
            sucessor.Withdraw(account);

        }


        return account;
    }
}
