import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import { API_PATHS } from "../../Utils/apiPath";
import axiosInstance from "../../Utils/axiosInstance";
import ExpenseOverview from "../../components/Expense/ExpenseOverview";
import Model from "../../components/Model";
import AddExpenseForm from "../../components/Expense/AddExpenseForm";
import ExpenseList from "../../components/Expense/ExpenseList";
import DeleteAlert from "../../components/DeleteAlert";
import toast from "react-hot-toast";

const Expence = () => {
  useUserAuth();

  const [expenseData, setexpenseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  const [openAddexpenseMode, setOpenAddexpenseMode] = useState(false);

  // get all expense details
  const fetchexpenseDetails = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.EXPENSE.GET_ALL_EXPENCE}`
      );

      if (response.data) {
        setexpenseData(response.data);
      }
    } catch (err) {
      console.log("something went wront. Please try again.", err);
    } finally {
      setLoading(false);
    }
  };

  // handle add expense details
  const handleAddExpense = async (expense) => {
    const { category, amount, date, icon } = expense;

    // validation checks
    if (!category.trim()) {
      toast.error("category is required.");
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Amount should be a valid number greater than 0.");
      return;
    }

    if (!date) {
      toast.error("Date is required.");
      return;
    }

    try {
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENCE, {
        category,
        amount,
        date,
        icon,
      });
      setOpenAddexpenseMode(false);
      toast.success("Expense added successfully");
      fetchexpenseDetails();
    } catch (error) {
      console.error(
        "Error adding expense:",
        error.response?.data?.message || error.message
      );
    }
  };

  // delete income
  const deleteExpense = async (id) => {
    try {
      await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENCE(id));
      setOpenDeleteAlert({ show: false, data: null });
      toast.success("expense details deleted successfully");
      fetchexpenseDetails();
    } catch (error) {
      console.error(
        "Error deleting expense.",
        error.response?.data?.message || error.message
      );
    }
  };

  // handle download income details
  const handleDownloadExpenseDetails = async () => {};

  useEffect(() => {
    fetchexpenseDetails();
    return () => {};
  }, []);

  return (
    <>
      <DashboardLayout activeMenu="Expense">
        <div className="my-5 mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div className="">
              <ExpenseOverview
                transaction={expenseData}
                onExpenseIncome={() => setOpenAddexpenseMode(true)}
              />
            </div>
            <ExpenseList
              transaction={expenseData}
              onDelete={(id) => {
                setOpenDeleteAlert({ show: true, data: id });
              }}
              onDownload={handleDownloadExpenseDetails}
            />
          </div>

          <Model
            isOpen={openAddexpenseMode}
            onClose={() => setOpenAddexpenseMode(false)}
            title="Add Expense"
          >
            <AddExpenseForm onAddExpense={handleAddExpense} />
          </Model>

          <Model
            isOpen={openDeleteAlert.show}
            onClose={() => setOpenDeleteAlert({ show: false, data: null })}
            title="Delete Expense"
          >
            <DeleteAlert
              content="Are you sure you want to delete this Expense detail?"
              onDelete={() => deleteExpense(openDeleteAlert.data)}
            />
          </Model>
        </div>
      </DashboardLayout>
    </>
  );
};
export default Expence;
