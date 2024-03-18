

const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contactS" });
};

//@desc Create New Contact
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    res.status(201).json({ message: "Create ContacT"});

};

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}`});
};

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public

