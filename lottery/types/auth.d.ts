interface AuthTicketResponse {
  uuid: string;
  challenge: string;
}

interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
}
