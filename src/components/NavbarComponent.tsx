import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button, Input } from "@heroui/react"; // Import Input
import Link from "next/link";
import React from "react";

const NavbarComponent = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className='font-bold text-inherit text-blue-600' >Test</p>
      </NavbarBrand>
      <NavbarContent justify='end'>
        {/* Add Search Input */}
        <NavbarItem className="hidden sm:flex"> {/* Hide on extra small screens */}
          <Input
            isClearable // Optional: Adds a clear button
            radius="lg"
            placeholder="Search..."
            className="max-w-xs" // Limit width
            // If you want a search icon, you'll need to import or define a SearchIcon component
            // startContent={ <SearchIcon className="..." /> }
          />
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#' className="text-blue-600">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
