import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AdminLayout } from "layouts";
import { Donation } from "interfaces";
import { useRequest } from "ahooks";
import { List, Avatar, Skeleton, Spin, Popconfirm, message } from "antd";
import { ListImage } from "components";
import { getDonations, deleteDonationApi } from "api";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Storage } from "aws-amplify";

const Donations = () => {
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [donations, setDonations] = useState<Donation[]>([]);

  type DonationProps = {
    items: Donation[];
    nextToken?: string;
  };

  const { data, loading, refresh, run } = useRequest<DonationProps>((value) =>
    getDonations(value || { nextToken })
  );

  const deleteDonationAction = useRequest(deleteDonationApi, {
    manual: true,
    onSuccess: () => {
      message.success("Donation deleted");
      refresh();
    },
    onError: () => {
      message.error("Donation not deleted");
    },
  });

  const fetchReports = useRequest<DonationProps>(getDonations, {
    manual: true,
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("err");
    },
  });

  useEffect(() => {
    if (!loading && data) {
      setDonations(data.items);
      setNextToken(data?.nextToken || null);
    }
  }, [loading]);

  useEffect(() => {
    if (!fetchReports.loading) {
      if (fetchReports.data?.items) {
        console.log("new datas:", fetchReports.data?.items);
        setDonations([...donations, ...fetchReports.data?.items]);
        setNextToken(fetchReports?.data.nextToken || null);
      }
    }
  }, [fetchReports.loading]);

  const loadRecipes = async () => {
    await fetchReports.run({ nextToken });
  };

  const onFinish = async () => {
    run({ nextToken: null });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const headingButton = (
    <Link href="/dashboard/donations/create">
      <Button
        icon={<PlusCircleOutlined />}
        style={{ marginTop: 2 }}
        type="dashed"
      >
        Add Donations
      </Button>
    </Link>
  );

  return (
    <>
      <AdminLayout
        title="Donations"
        heading="Donations"
        headingButton={headingButton}
      >
        <List
          className="demo-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          // loadMore={loadMore}
          dataSource={donations}
          renderItem={(donation: Donation) => {
            return (
              <List.Item
                actions={[
                  <Link href={`/dashboard/donations/edit/${donation.id}`}>
                    edit
                  </Link>,
                  <Popconfirm
                    title="Are you sure to delete this donation?"
                    onConfirm={() => deleteDonationAction.run(donation.id)}
                    okText="Yes"
                    cancelText="No"
                    placement="topRight"
                  >
                    <a
                      className="text-danger"
                      key="ban-user"
                      style={{
                        width: 80,
                        display: "inline-block",
                        textAlign: "left",
                      }}
                    >
                      delete
                    </a>
                  </Popconfirm>,
                ]}
              >
                <Skeleton avatar title={false} loading={loading} active>
                  <List.Item.Meta
                    avatar={<ListImage image={donation.image} />}
                    description={
                      <div>
                        <span style={{ wordBreak: "break-all" }}>
                          {donation.caption}
                        </span>
                        <div
                          className="show-xs"
                          style={{ color: "rgba(0, 0, 0, 0.65)" }}
                        >
                          created at{" "}
                          {new Date(donation.createdAt).toDateString()}
                        </div>
                      </div>
                    }
                  />
                  <div className="hide-xs">
                    created at {new Date(donation.createdAt).toDateString()}
                  </div>
                </Skeleton>
              </List.Item>
            );
          }}
        />
        <div
          style={{
            display: "flex",
            marginTop: 40,
            marginBottom: 20,
            justifyContent: "center",
          }}
        >
          {fetchReports.loading ? (
            <Spin size="large" />
          ) : (
            nextToken && (
              <a
                onClick={() => loadRecipes()}
                className="custom-btn custom-btn--big custom-btn--green btn--animated"
              >
                Load more
              </a>
            )
          )}
        </div>
      </AdminLayout>
    </>
  );
};

export default Donations;
