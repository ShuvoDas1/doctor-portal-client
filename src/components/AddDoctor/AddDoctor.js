import React, { useState } from 'react';

const AddDoctor = () => {

    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = (e) => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFile = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('info', info)

        fetch('http://localhost:4000/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input onBlur={handleBlur} type="name" class="form-control" name='name' placeholder="Name" />
                </div>
                <div class="form-group">
                    <input onChange={handleFile} type="file" name='file' class="form-control-file" id="exampleFormControlFile1" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </section>
    );
};

export default AddDoctor;