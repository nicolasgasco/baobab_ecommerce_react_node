import React, { Fragment, useContext, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ShoppingCartIcon,
  MenuIcon,
  XIcon,
  UserIcon,
} from "@heroicons/react/outline";
import BaobabLogo from "../../assets/img/baobab.svg";

import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router";

import jwt_decode from "jwt-decode";

const MainNav = () => {
  const [userGreeting, setUserGreeting] = useState("");
  const navigation = [userGreeting];
  const profile = ["Your Profile", "Sign in"];
  const cart = ["Your orders", "See items"];

  const history = useHistory();

  const { logoutUser, isLogged, token } = useContext(AuthContext);

  // This came with the component
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleSignin = () => {
    if (!localStorage.getItem("token")) {
      history.push("/signin");
    } else {
      logoutUser();
      history.go(0);
      setUserGreeting("");
    }
  };

  const handleLogo = () => {
    history.push("/");
    history.go(0);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUserGreeting(`Hi, ${jwt_decode(localStorage.getItem("token")).name}!`);
    } else {
      setUserGreeting("");
    }
  }, [isLogged, userGreeting, token]);

  // Second element is for signing in
  const showProfileItems = profile.map((item, index) => {
    // Sign in
    if (index === 1) {
      return (
        <Menu.Item key={item}>
          {({ active }) => (
            <a
              id={`profile-item-${index + 1}`}
              onClick={handleSignin}
              className={classNames(
                active ? "bg-gray-100" : "",
                "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
              )}
            >
              {localStorage.getItem("token") ? "Log out" : item}
            </a>
          )}
        </Menu.Item>
      );
    } else {
      return (
        localStorage.getItem("token") && (
          <Menu.Item key={item}>
            {({ active }) => (
              <a
                id={`profile-item-${index + 1}`}
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                )}
              >
                {item}
              </a>
            )}
          </Menu.Item>
        )
      );
    }
  });

  const showCartItems = profile.map((item, index) => {
    return (
      <Menu.Item key={item}>
        {({ active }) => (
          <a
            id={`cart-item-${index + 1}`}
            onClick={index === 1 && handleSignin}
            className={classNames(
              active ? "bg-gray-100" : "",
              "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
            )}
          >
            {item}
          </a>
        )}
      </Menu.Item>
    );
  });

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <header className="max-w-7xl mx-auto mb-3 md:mb-0 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 out">
                  <img
                    onClick={handleLogo}
                    className="h-12 w-12 cursor-pointer"
                    src={BaobabLogo}
                    alt="Workflow"
                  />
                </div>
                {/* {localStorage.getItem("token") && (
                  <div class="mx-5 bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                    <p>{`Hi, ${
                      jwt_decode(localStorage.getItem("token")).name
                    }!`}</p>
                  </div>
                )} */}
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {localStorage.getItem("token") &&
                      navigation.map((item, itemIdx) =>
                        itemIdx === 0 ? (
                          <Fragment key={item}>
                            <a
                              href="#"
                              className="bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium cursor-default"
                            >
                              {item}
                            </a>
                          </Fragment>
                        ) : (
                          <a
                            key={item}
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item}
                          </a>
                        )
                      )}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">View profile</span>
                            <ShoppingCartIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            {showCartItems}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                      <>
                        <div>
                          {/* <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={UserCircleIcon}
                              alt="Generic avatar logo"
                            />
                          </Menu.Button> */}
                          <Menu.Button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">View profile</span>
                            <UserIcon className="h-6 w-6" aria-hidden="true" />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            {showProfileItems}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </header>

          <Disclosure.Panel className="md:hidden bg-white mb-5">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item, itemIdx) =>
                itemIdx === 0 ? (
                  <Fragment key={item}>
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                      href="#"
                      className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item}
                    </a>
                  </Fragment>
                ) : (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    tom@example.com
                  </div>
                </div>
                <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View shopping cart</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {profile.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MainNav;
