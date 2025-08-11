import React from "react";

type Status = "completed" | "pending" | "failed";

interface HistoryCardProps {
  name: string;
  amount: string;
  date: string;
  status: Status;
}

const statusColor: Record<Status, string> = {
  completed: "text-green-600",
  pending: "text-yellow-600",
  failed: "text-red-600",
};

const HistoryCard: React.FC<HistoryCardProps> = ({ name, amount, date, status }) => (
  <div className="border rounded-lg p-4 shadow-md flex justify-between items-center">
    <div>
      <h4 className="font-semibold">{name}</h4>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
    <div className="text-right">
      <p className="font-bold">{amount}</p>
      <p className={`text-sm ${statusColor[status]}`}>{status}</p>
    </div>
  </div>
);

export default HistoryCard;