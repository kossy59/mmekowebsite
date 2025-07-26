import "./Navs.css";
import { useRouter } from "next/navigation";
import MenuIconImg from "@/components/MenuIcon-img";
import { useMenuContext } from "@/Context/MenuContext";

 const Sidemenu = () => {
  const router = useRouter();
  const exclusive_verify = true
  const modelID = "random_id_123" // useSelector((state) => state.profile.modelID);
  const model = true // useSelector((state) => state.profile.model);
  const firstname = "John Doe" // useSelector((state) => state.profile.firstname);
  const upgrade = true// const [upgrade, setUpgrade] = useState(false);
  const isModel = true
  const gold_balance = 0 // const [gold_balance, setgold_balance] = useState("");
  const admin = true // useSelector((state) => state.profile.admin);
    const { open, toggleMenu: handleMenubar } = useMenuContext();
  
  
  // const [profile_photo, setprofile_photo] = useState(profileIcon);
  // const photo = useSelector((state) => state.comprofile.profilephoto);
  // const postuserid = useSelector((state) => state.register.userID);
  // const balance = useSelector((state) => state.profile.balance);
  // const exclusive_verify = useSelector(
  //   (state) => state.profile.exclusive_verify
  // );
  // // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [live, setLive] = useState(false);
  // const formatter = new Intl.NumberFormat("en-US");
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (photo) {
  //     setprofile_photo(photo);
  //   }

  //   if (balance) {
  //     let gold_b = formatter.format(parseFloat(balance));
  //     setgold_balance(gold_b);
  //   } else {
  //     setgold_balance("0");
  //   }
  // });

  // const location = useLocation().pathname;
  // const loggedInUser = useAuth();

  // const Isnotmodel = () => {
  //   if (!model) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  // const Ismodel = () => {
  //   if (model) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const verify = () => {
    if (!exclusive_verify) {
      if (model) {
        return (
          <button
            className="flex flex-col items-center"
            onClick={(e) => router.push(`/modelbyid/${modelID}`)}
          >
            <img
              alt="manageIcon"
              src={"/icons/icons8-model.png"}
              className="object-cover w-7 h-7"
            ></img>
            <p className="mt-1 ml-1">Model portfolio</p>
          </button>
        );
      } else {
        return (
          <button
            className="flex flex-col items-center"
            onClick={(e) => router.push("/createmodel")}
          >
            <img
              alt="manageIcon"
              src={"/icons/icons8-model.png"}
              className="object-cover w-7 h-7"
            ></img>
            <p className="mt-1 ml-1">Model portfolio</p>
          </button>
        );
      }
    } else {
      return (
        <button
          className="flex flex-col items-center"
          onClick={(e) => router.push("/verification")}
        >
          <img
            alt="addIcon"
            src={"/icons/icons8-plus.png"}
            className="object-cover w-7 h-7"
          ></img>
          <p className="mt-1 ml-1">Model Application</p>
        </button>
      );
    }
  };

  const logout = () => {
    localStorage.removeItem("login");
    window.location.href = "/";
  };

  return (
    <div className="fixed z-50">
      <div className="">
        <nav
          onClick={handleMenubar}
          className={`${
            open ? "show" : "hide"
          } sm:block menu-width origin-top-right mr mt p-2 h-fit bg-gray-900 text-white fixed sm:rounded-lg z-[70] `}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col items-start ml-1 mr-1 p-2">
              <div className="flex justify-between w-full ">
                <div className="flex text-xs  text-blue-200 mb-3">
                  <MenuIconImg 
                  src="/icons/icons8-profile_user.png" 
                  name={firstname} 
                  itc="null"
                  rounded="rounded-full"
                  url="/profile" />
                </div>

                {/* <div className="flex p-1 "> */}
                {/* <button onClick={(e) => { */}
                {/* e.stopPropagation(); */}
                {/* setIsModalOpen(true) */}
                {/* }}> */}

                {/* <IoIosTimer /> */}
                {/* </button> */}
                {/* <img alt="onlineIcon" src={onlineIcon} className="mb-2"></img> */}
                {/* </div> */}
              </div>
              {/* time modal */}

              <div className="txt-color flex justify-between w-full text-xs">
                <div className="flex ">
                  <p className="mt-1 ml-1">status:</p>
                  <p className="mt-1 ml-3">Basic Member</p>
                </div>

                <button
                  // onClick={(e) => {
                  //   e.stopPropagation();
                  //   handleMenubar();
                  //   // setUpgrade(true)
                  //   router.push("/coming-soon");
                  // }}
                >
                  <p className="mt-1 ml-3 hover:text-blue-400 active:text-blue-100">
                    (Upgrade)
                  </p>
                </button>
              </div>
              {/* {upgrade && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
                  <div className="p-5 px-10 text-center bg-gray-300 rounded-lg shadow-lg">
                    <p className="text-lg font-semibold text-gray-800">
                      Coming Soon
                    </p>
                    <button
                      className="px-4 py-2 mt-4 text-white bg-orange-600 rounded font-semigold"
                      // onClick={() => setUpgrade(false)}
                    >
                      OK
                    </button>
                  </div>
                </div>
              )} */}
              {/* {!loggedInUser?.isModel && ( */}
              {isModel && (
                <div className="flex justify-between w-full text-xs txt-color">
                  <div className="flex ">
                    <p className="mt-1 ml-1">You have:</p>
                    <p className="mt-1 ml-3">{gold_balance} Golds</p>
                  </div>

                  <p
                    className="mt-1 ml-3 hover:text-blue-400 active:text-blue-100 bt"
                    onClick={(e) => router.push("/topup")}
                  >
                    (Get More)
                  </p>
                </div>
              )}
            </div>
            <hr className="w-full my-3 bg-blue-900 "></hr>

            <div className="grid-sys text-xs  text-blue-100">
               {/* onClick={(e) => {
                //   if (location === `/profile/${postuserid}`) { for profile reset
                //     return;
                //   }
                //   dispatch(resetprofilebyid());
                // }} */}
              <MenuIconImg 
                src="/icons/icons8-customer.gif" 
                name="Profile" 
                url="/profile/${postuserid}" />

              {verify()}

              <MenuIconImg 
                  src="/icons/icons8-users.png" 
                  name={"Following"} 
                  url="/following" />

              {/* <button
                className="flex flex-col items-center"
                onClick={(e) => router.push("/editprofile")}
              >
                <img
                  alt="editIcon"
                  src={IconsEdit}
                  className="object-cover w-7 h-7"
                ></img>
                <p className="mt-1 ml-1">Edit porfile</p>
              </button> */}

              <MenuIconImg 
                  src="/icons/icons8-collection.png" 
                  name={"Collections"} 
                  url="/collections" />
              <MenuIconImg 
                  src="/icons/icons8-gold.png" 
                  name={"Gold Stats"} 
                  url="/goldstats" />

              {/* <button
                className="flex flex-col items-center"
                // onClick={(e) => {
                //   e.stopPropagation();
                //   setIsModalOpen(true);
                // }}
                onClick={(e) => router.push("")}
              >
                <img
                  alt="IconsPending"
                  src={"/icons/"}
                  className="object-cover w-7 h-7"
                ></img>
                <p className="mt-1 ml-1"> </p>
              </button> */}
              <MenuIconImg 
                  src="/icons/icons8-receipts.gif" 
                  name={"Transactions"} 
                  url="/earning" />
              {!admin &&
                <MenuIconImg 
                  src="/icons/icons8-admin.png" 
                  name={"Admin"} 
                  url="/admin" />
              }

              <MenuIconImg 
                  src="/icons/icons8-gift.gif" 
                  name={"Whats New"} 
                  url="/change-log" />

              <MenuIconImg 
                  src="/icons/icons8-log-out.png" 
                  name={"Log out"} 
                  url="/logout" />
            </div>

            {/* <hr className="w-full mt-1 bg-blue-900 ht"></hr> */}
            <div className="flex flex-col items-start ml-1 mr-1 text-xs  text-white">
              {/* <button
                className="flex flex-col items-center"
                onClick={(e) => router.push("/goldstats")}
              >
                <img
                  alt="goldIcon"
                  src={goldIcon}
                  className="object-cover w-7 h-7"
                ></img>
                <p className="mt-1 ml-1"> Gold Stats</p>
              </button> */}
            </div>

            {/* {admin && ( */}
            {/* // <div> */}
            {/* <hr className="w-full mt-1 bg-blue-900 ht"></hr> */}

            {/* <div className="flex flex-col items-start ml-1 mr-1 text-xs  text-white"> */}

            {/* <button className="flex mt-2"
                    onClick={(e) => router.push("/ad_min")}>
                    <img
                      alt="adminn"
                      src={adminn}
                      className="object-cover w-7 h-7"
                    ></img>
                    <p className="mt-1 ml-1">Admin</p>
                  </button> */}
            {/* </div> */}
            {/* </div> */}
            {/* )} */}

            {/* <hr className="w-full mt-1 bg-blue-900 ht"></hr> */}

            <div className="flex flex-col items-start mb-2 ml-1 mr-1 text-xs  text-white">
              {/* <button className="flex mt-3" onClick={(e) => logout()}>
                <img
                  alt="logoutIcon"
                  src={logoutIcon}
                  className="object-cover w-7 h-7"
                ></img>
                <p className="mt-1 ml-1">Log out</p>
              </button> */}
            </div>
          </div>
        </nav>
      </div>

      
    </div>
  );
};

export default Sidemenu