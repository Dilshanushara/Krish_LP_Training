public class FiveThousandHandler extends Handler{

    @Override
    public BankAccount Withdraw(BankAccount account) {
        int requestedAmount=account.getRequestedAmount();

            int numberofNotesToIssued = requestedAmount / 5000;
            if (numberofNotesToIssued > 0)
            {
                if (numberofNotesToIssued > 1)
                {
                    System.out.println(numberofNotesToIssued+" FiveThousand notes are Issued by FiveThousandHandler");
                }
                else
                {
                    System.out.println(numberofNotesToIssued+" FiveThousand note is Issued by FiveThousandHandler");
                }
            }
            int pendingAmountToBeProcessed = requestedAmount % 5000;

            if (pendingAmountToBeProcessed > 0){
                account.setRemainAmountTOIssueNotes(pendingAmountToBeProcessed);
                sucessor.Withdraw(account);

            }

        return account;
    }
}
