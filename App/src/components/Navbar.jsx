import { A } from "@solidjs/router";
function Navbar() {
  const navEl = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "about",
    },
  ];

  return (
    <>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded font-poppins">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <A href="/" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap text-theme-smoky">
              Re.<span class="text-theme-purple">search</span>
            </span>
          </A>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row ml-20 md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <For each={navEl}>
                {(nav, index) => (
                  <li key={nav.name + index}>
                    <A
                      href={nav.path}
                      class="block py-2 pl-3 pr-4 text-theme-smoky rounded md:bg-transparent md:p-0"
                    >
                      {nav.name}
                    </A>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
