/** Dto */
const studentGrDto = require("../../model/dto/student_group.dto");
const config = require("config");

exports.createStGr = (req, res, next) => {
    let stugro = {
        student_id: req.body.student_id,
        group_id: req.body.group_id
    };
    studentGrDto.create(stugro, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};


exports.updateStGr = (req, res, next) => {
    let student_group = {
        student_id: req.body.student_id,
        group_id: req.body.group_id
    };
    studentGrDto.update({ _id: req.body.student_id }, student_group, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.getAll = (req, res, next) => {

    studentGrDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};
exports.getByCode = (req, res, next) => {

    studentGrDto.getByCode({ student_id: req.params.student_id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.deleteStGr = () => {
    studentGrDto.delete({ _id: req.body.student_id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
}