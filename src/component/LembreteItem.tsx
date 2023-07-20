import React from "react";
import addNotification from "react-push-notification";

const actionNotify = (msg: string) => {
  addNotification({
    title: "Work Bem-estar",
    message: msg,
    duration: 4000,
    icon: "logo.png",
    native: true,
  });
};

interface LembreteItemProps {
  title: string;
  text: string;
  onDelete: () => void;
}

const LembreteItem: React.FC<LembreteItemProps> = ({ title, text, onDelete }) => {
  return (
    <div className="item">
      <h2>{title}</h2>
      <button className="btn btn-primary" onClick={() => actionNotify(text)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v33.3C119.6 157.2 32 252.4 32 368H480c0-115.6-87.6-210.8-200-222.7V112h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H256 216zM24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z"/></svg>
        </button>
      <button className="btn btn-danger" onClick={onDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
      </button>
    </div>
  );
};

export default LembreteItem;
