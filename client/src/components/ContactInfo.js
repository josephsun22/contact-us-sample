export default function ContactInfo({ contacts }) {
    return (
      <div>
        <div className="mb-4">
          <h2 className="underline font-bold text-lg mb-2">Contact Details</h2>
          <p>Phone: {contacts.phone}</p>
          <p>Email: {contacts.email}</p>
        </div>
        <div className="mb-4">
          <p className="underline font-bold text-lg mb-2">Postal Address:</p>
          <p>{contacts.postalAddress}</p>
        </div>
        <div className="mb-4">
          <h3 className="underline font-bold text-lg mb-2">
            Contact center hours of operation
          </h3>
          <p>Monday - Friday: {contacts.businessHours.mondayToFriday}</p>
          <p>Saturday: {contacts.businessHours.saturday || "Closed"}</p>
          <p>Sunday: {contacts.businessHours.sunday || "Closed"}</p>
        </div>
      </div>
    );
  }