import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { addTodo, editTodo } from '../redux/slice/todoSlice';
import { X } from 'lucide-react';

const AddTodo = ({ onClose, editValues = null, isEdit = false }) => {
    const dispatch = useDispatch();

    const initialValues = editValues || {
        id: uuidv4(),
        name: editValues?.name ||'',
        description: editValues?.description || '',
        status: editValues?.status ||'completed',
    };

    const onSubmit = (values, { resetForm }) => {
        if (isEdit) {
            dispatch(editTodo(values));
        } else {
            dispatch(addTodo(values));
        }
        resetForm();
        onClose();
    };

    const formik = useFormik({
        initialValues,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit,
    });

    const handleUndo = () => {
        formik.setFieldValue('status', 'pending');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)]">
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-md">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <X size={24} />
                </button>

                <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-100 mb-6">
                    {isEdit ? 'Edit Todo' : 'Add New Todo'}
                </h2>

                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                    <div className="space-y-4">
                        {/* Todo Name Field */}
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Todo Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-gray-400"
                                {...formik.getFieldProps('name')}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <p className="text-red-500 text-sm">{formik.errors.name}</p>
                            )}
                        </div>

                        {/* Description Field */}
                        <div className="space-y-2">
                            <label
                                htmlFor="description"
                                className="text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                className="block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-gray-400"
                                {...formik.getFieldProps('description')}
                            />
                            {formik.touched.description && formik.errors.description && (
                                <p className="text-red-500 text-sm">{formik.errors.description}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        {!isEdit && (
                            <button
                                type="submit"
                                onClick={handleUndo}
                                className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2"
                            >
                                <span>Undo</span>
                            </button>
                        )}
                        <button
                            type="submit"
                            className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            <span>{isEdit ? 'Update Todo' : 'Add Todo'}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTodo;
