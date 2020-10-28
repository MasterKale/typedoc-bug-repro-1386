/**
 * `PublicKeyCredential` defined in TypeScript's lib.dom.d.ts is included as expected
 */
export interface AttestationCredential extends PublicKeyCredential {
  response: AuthenticatorAttestationResponse;
}

/**
 * `PublicKeyCredentialCreationOptions` defined in TypeScript's lib.dom.d.ts is NOT included but
 * should be
 */
export interface PublicKeyCredentialCreationOptionsJSON
  extends Omit<PublicKeyCredentialCreationOptions, 'challenge'> {
  challenge: string;
}
