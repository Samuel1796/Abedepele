import React from "react";

const Footer = () => {
  return (
    <>
      <section>
        <footer class="bg-green-600 rounded-lg shadow dark:bg-gray-900 m-4">
          <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
              <a
                href="/"
                class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              >
                
                <span class=" text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  EcoSave
                </span>
              </a>
              <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" class="text-white hover:underline me-4 md:me-6">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white hover:underline me-4 md:me-6">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white hover:underline me-4 md:me-6">
                    Licensing
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-white sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="/" class="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
