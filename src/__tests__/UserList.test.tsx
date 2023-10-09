import {fireEvent, render} from "@testing-library/react";

import UserList from "../UserList.tsx";

const testCustomers = [
  {id: "test-uuid-1", name: "John Test", email: "john@test.com", role: "ADMIN" as Role },
  {id: "test-uuid-2", name: 'Dave Test', email: "dave@test.com", role: "MANAGER" as Role },
  {id: "test-uuid-3", name: "Greg Test", email: "greg@test.com", role: "ADMIN" as Role },
];

describe("<UserList />", () => {
  test("only shows admin users by default", async () => {
    const { queryByText } = render(<UserList customers={testCustomers} />);

    // Check that the component renders with the default role selected (ADMIN)
    expect(queryByText("Admin Users")).toBeTruthy();
    expect(queryByText("John Test")).toBeTruthy();
    expect(queryByText("Greg Test")).toBeTruthy();
    expect(queryByText("Dave Test")).toBeNull();
  });

  test("changes role when a radio button is clicked", () => {
    const { queryByText, getByTestId } = render(<UserList customers={testCustomers} />);

    // Check that the default role is selected
    expect(queryByText("Admin Users")).toBeTruthy();

    // Change the role to MANAGER
    fireEvent.click(getByTestId("radio-MANAGER"));

    // Check that the role has changed
    expect(queryByText('Manager Users')).toBeTruthy();
    expect(queryByText('Dave Test')).toBeTruthy();
    expect(queryByText('John Test')).toBeNull();
    expect(queryByText('Greg Test')).toBeNull();

    // Change the role back to ADMIN
    fireEvent.click(getByTestId("radio-ADMIN"));

    // Check that the role has changed
    expect(queryByText("Admin Users")).toBeTruthy();
    expect(queryByText("John Test")).toBeTruthy();
    expect(queryByText("Greg Test")).toBeTruthy();
    expect(queryByText("Dave Test")).toBeNull();
  });
})