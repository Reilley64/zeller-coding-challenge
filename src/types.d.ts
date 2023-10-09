enum Role {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER"
}

type Customer = {
  id: string;
  email: string;
  name: string;
  role: Role;
}
