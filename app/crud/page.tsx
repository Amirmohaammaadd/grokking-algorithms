"use client"

import { Button, Form, Input } from "antd";

export interface CustomFormData {
    username: string,
    email: string
}

const MyFormItem = Form.Item<CustomFormData>

const Page = () => {
    const [form] = Form.useForm()

    const onSubmit = (values: CustomFormData) => {
        const { email, username } = values
        console.log({ email, username });
    }

    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <Form
                form={form}
                onFinish={onSubmit}
            >
                <MyFormItem name="username" rules={[{ required: true, message: "Username is required" }]}>
                    <Input placeholder="username ..." size="large" />
                </MyFormItem>

                <MyFormItem name="email" rules={[{ required: true, message: "email is required" }]}>
                    <Input placeholder="email ..." size="large" />
                </MyFormItem>

                <Button htmlType="submit" className="w-full" type="primary">ok</Button>
            </Form>
        </div>);
}

export default Page;