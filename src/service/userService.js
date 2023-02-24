export const isMemberCheck = (user) => {
  let isMember = false;
  if (user) {
    if (user.infos && user.infos.isMember) {
      //the paiement cotisation date should be after this date to be valid
      const borderData = new Date("09/01/2022"); // Expiration date a changer
      const isTooLate =
        borderData < new Date(user.infos.last_paiement_cotisation_date);
      if (!isTooLate) {
        isMember = true;
      }
    }
  }
  return isMember;
};
