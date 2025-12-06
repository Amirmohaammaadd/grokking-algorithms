type AppProps = {
  message: string;
};

const App_One = ({ message }: AppProps) => <div>{message}</div>;

const App_Two = ({ message }: AppProps): React.JSX.Element => <div>{message}</div>;

const App_Three = ({ message }: { message: string }) => <div>{message}</div>;

const App_Four: React.FunctionComponent<{ message: string }> = ({ message }) => (<div>{message}</div>);

const App_Five: React.FC<AppProps> = ({ message }) => <div>{message}</div>;