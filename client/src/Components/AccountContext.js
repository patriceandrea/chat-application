const { createContext, useState } = require("react");

const AccountContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: null });
  return (<AccountContext.Provider value={{ user, setUser }}>
    {children}
  </AccountContext.Provider>
  );
};

export default UserContext; 