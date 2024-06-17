import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loading = () => {
  return (
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 48,
          }}
          spin
        />
      }
    />
  );
};

export default Loading;
