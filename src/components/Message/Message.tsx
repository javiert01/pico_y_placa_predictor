import classes from "./Message.module.css";
import { MessageProps } from "./Message.types";

const Message = (props: MessageProps) => {
  const { message, type } = props;
  return (
    <div className={classes.container}>
      <h3 className={type === "success" ? classes.success : classes.error}>
        {message}
      </h3>
    </div>
  );
};
export default Message;
